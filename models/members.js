const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  memberName: { type: String, required: true },
  relatedMemName: [{ type: String, required: true }],
  relation: [{ type: Number, required: true }],
  memberImage: { type: String, required:true},
});

const Members = mongoose.model("Members", memberSchema);

module.exports = Members;

