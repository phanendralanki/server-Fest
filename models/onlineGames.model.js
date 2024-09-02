import mongoose from "mongoose";

const onlineGamesSchema = new mongoose.Schema({
    regno: {
        type: String,
        required: true,
        unique: true
      },
      mobileno: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      branch: {
        type: String,
        required: true
      },
      interestedGames: {
        pubg: {
          type: Boolean,
          default: false
        },
        freeFire: {
          type: Boolean,
          default: false
        },
        ludo:{
            type:Boolean,
            default:false,
        },
        uno:{
            type:Boolean,
            default:false,
        }
    }
},{
    timestamps:true,
});

export const onlineGamesModel = mongoose.model('OnlineGame',onlineGamesSchema);