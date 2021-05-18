/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const str1 = firstString.replace(/\s+/g, '');
  const str2 = secondString.replace(/\s+/g, '');
  if (str1.length !== str2.length) return false;
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');
  return (sorted1 === sorted2);
}
