const express = require("express");
const verifyWebhook = require("./verifyWebhook");
var axios = require("axios").default;
const { UsersTable } = require("../../../models");
const {} = require("../../../models");

const requestNewAccessToken = (refreshToken) => {
  return axios.post(`${process.env.CALENDLY_AUTH_BASE_URL}/oauth/token`, {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
};

const router = express.Router();

router.post("/", verifyWebhook, async (req, res) => {
  const user = await UsersTable.findOne({
    where: {
      Calendly_ID: req.body.created_by,
    },
  });

  var options = {
    method: "POST",
    url: req.body.payload.event + "/cancellation",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.Access_Token,
      // Need to hit backend route to get accessToken from database
    },
    data: {
      canceled_by: "Protectly on behalf of Calendly User.",
      reason:
        "This meeting has been automatically cancelled by Protectly (protectly.cloud) because the invitee was not on a list of approved users. Please reach out to the meeting host to get your email address added to their list of approved users. ",
      canceler_type: "host",
    },
  };

  try {
    await axios.request(options);
    return res.sendStatus(200);
  } catch (error) {
    if (error.response.status !== 401) {
      return res.sendStatus(400);
    }
  }

  try {
    const result = await requestNewAccessToken(user.Refresh_Token);
    const { access_token, refresh_token } = result.data;

    await UsersTable.update(
      { Access_Token: access_token, Refresh_Token: refresh_token },
      { where: { id: user.id } }
    );

    options.headers.Authorization = "Bearer " + access_token;

    await axios.request(options);
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(400);
  }
});

module.exports = router;
