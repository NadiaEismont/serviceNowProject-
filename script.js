// $(".carousel").carousel({
//   interval: 2000,
// });

const spinner = document.querySelector(".loadingSpinner");
const backdrop = document.querySelector(".backdrop");

async function startSpinner() {
  spinner.style.display = "block";
  toggleModal();
}

function hideLoader() {
  toggleModal();
  spinner.style.display = "none";
}

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
}

async function start_stop_spinner() {
  console.log("start timer");
  await startSpinner();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  hideLoader();
  console.log("after 1 second");
}

start_stop_spinner();
