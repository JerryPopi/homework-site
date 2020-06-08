exports.statusResponse = function (statusCode) {
  switch (statusCode) {
    case 0:
        //location.href = './success';
      break;

    case 1:
      console.log("Username is already taken");
      break;
  }
};
