const mongoose = require("");

mongoose.connect(
    "mongodb+srv://myAtlasDBUser:pwd@atlascluster.kydmpyp.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  mongoose.connection.on("error", err => {
    console.log(err);
  });
  mongoose.connection.on("open", () => {
    console.log("Connection successful");
  });

  