const byteCharacters = atob(res);
const byteNumbers = new Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
  byteNumbers[i] = byteCharacters.charCodeAt(i);
}
const byteArray = new Uint8Array(byteNumbers);
const blob = new Blob([byteArray], {
  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
});

const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', 'notifications.xlsx');
document.body.appendChild(link);
link.click();
