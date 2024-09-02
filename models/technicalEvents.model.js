import mongoose from "mongoose";

const technicalEventsSchema = new mongoose.Schema({
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
        ppt: {
          type: Boolean,
          default: false
        },
        quiz: {
          type: Boolean,
          default: false
        },
        posterPresentation: {
          type: Boolean,
          default: false
        },
        projectExpo: {
          type: Boolean,
          default: false
        },
        spontaneousCompetition: {
          type: Boolean,
          default: false
        },
        crazyOutput: {
          type: Boolean,
          default: false
        }
    }
},{
    timestamps:true,
});

export const technicalEventsModel = mongoose.model('TechnicalEvent',technicalEventsSchema);