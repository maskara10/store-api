import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://vinicin:mongodb@cluster0.1gyhvg1.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}

export { getClient };
