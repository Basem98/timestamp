/**
 * 
 * @param {Number | String} dateInput
 * @returns {Date | null} dateObjectInstance
 */
function isProperDate(dateInput) {
  let dateInstance = new Date();

  if (!dateInput) return dateInstance;

  if (!isNaN(dateInput) ) {
    dateInstance = new Date(parseInt(dateInput));
  } else if (new Date(dateInput).toString() != new Date(undefined).toString()) {
    dateInstance = new Date(dateInput);
  } else {
    return null;
  }
  return dateInstance;
}


module.exports.isProperDate = isProperDate;