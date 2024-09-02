import mongoose from "mongoose";

const offlineGamesSchema = new mongoose.Schema({
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
        chess: {
          type: Boolean,
          default: false
        },
        sudoku: {
          type: Boolean,
          default: false
        },
    }
},{
    timestamps:true,
});

export const offlineGamesModel = mongoose.model('OfflineGame',offlineGamesSchema);