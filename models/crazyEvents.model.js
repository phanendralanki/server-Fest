import mongoose from "mongoose";

const crazyEventsSchema = new mongoose.Schema({
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
        teamBuildingBaloonGame: {
          type: Boolean,
          default: false
        },
        miniBasket: {
          type: Boolean,
          default: false
        },
        ticTacToe: {
          type: Boolean,
          default: false
        },
    }
},{
    timestamps:true,
});

export const crazyEventsModel = mongoose.model('CrazyEvent',crazyEventsSchema);