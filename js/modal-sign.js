let modalWrap = null;
const showModal = () => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
        <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog">
        <div class="modal-content">
            <!-- Sign-in Form Start-->
            <div class="sign-container">
            <div class="d-flex justify-content-center align-items-center my-3 sign-in-logo">
            <img class="logo" src="./assets/image/Logo.png" alt="Film House"/>
            </div>
            <div class="input-container">
                <input
                class="text-input text-black"
                type="text"
                placeholder="Enter phone number or email address"
                />
                <input
                class="text-input text-black"
                type="password"
                placeholder="Enter Password"
                />
            </div>
            <div class="button-container">
                <button class="btn btn-secondary btn-lg sign-in-btn">
                Sign In
                </button>
                <button class="btn btn-link sign-up-btn">Sign Up</button>
            </div>
            </div>
            <!-- Sign-in Form End-->
        </div>
        </div>
        </div>
        <!-- Modal End -->
    `;

  document.body.append(modalWrap);

  let modal = new bootstrap.Modal(modalWrap.querySelector("#exampleModal"));
  modal.show();
};
