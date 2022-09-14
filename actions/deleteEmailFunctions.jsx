const deleteEmail = async (id) => {
  const dataWeAreSending = await fetch(`/api/dashboard/emaildelete/${id}`, {
    method: "DELETE",
    headers: {
      //think i need an authorization header here, i'm not sure
      "Content-Type": "application/json",
    },
  });
  const status = dataWeAreSending.status;
  if (status === 200) {
    alert("Your email has been removed");
    //where re-rendering will happen
  }
};

const deleteAccount = async (id) => {
  const dataWeAreSending = await fetch(`/api/dashboard/userdelete/${id}`, {
    method: "DELETE",
    headers: {
      //think i need an authorization header here, i'm not sure
      "Content-Type": "application/json",
    },
  });
  const status = dataWeAreSending.status;
  if (status === 200) {
    alert("Your account has been deleted");
    //where re-rendering will happen to redirect to home page
  }
};
