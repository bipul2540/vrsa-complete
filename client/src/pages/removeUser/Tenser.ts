// Requiring module
import * as tf from "@tensorflow/tfjs";
// Sample CSV data link
const csvUrl = `C:/Users/user/Desktop/collage project-2/Result-analysis/server/routes/StudentsPerformance.csv`;

export const predicateSingleColumn = async () => {
  // We want to predict single column "indus".
  const list = ["gender", "math score"];
  const csvDataset = tf.data.csv(csvUrl, {
    hasHeader: true,
    columnNames: list,
    columnConfigs: {
      gender: {
        isLabel: true,
      },
    },
    configuredColumnsOnly: true,
    delimWhitespace: true,
  });
  return csvDataset;
};
