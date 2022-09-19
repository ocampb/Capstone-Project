const express = require("express");
const verifyWebhook = require("./verifyWebhook");
var axios = require("axios").default;
const { UsersTable } = require("../../../models");
const { ApprovedList } = require("../../../models");

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
  const authorizedEmail = await ApprovedList.findOne({
    where: {
      User_ID: user.id,
      Email: req.body.payload.email,
    },
  });

  var options = {
    method: "POST",
    url: req.body.payload.event + "/cancellation",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.Access_Token,
    },
    data: {
      canceled_by: "Protectly on behalf of Calendly User.",
      reason: user.cancel_message,
      canceler_type: "host",
    },
  };

  if (!authorizedEmail) {
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
  } else {
    return res.sendStatus(200);
  }
});

module.exports = router;
