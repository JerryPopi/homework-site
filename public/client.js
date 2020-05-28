exports.statusResponse = function (statusCode) {
  switch (statusCode) {
    case 0:
        location.href = './success';
      break;

    case 1:
      alert("Username is already taken");
      break;
  }
};
