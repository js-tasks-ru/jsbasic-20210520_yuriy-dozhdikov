function truncate(str, maxlength) {
  return str.length <= maxlength ? str : str.slice(0, str.length > 1 ? maxlength - 1 : maxlength) + '…';
}
