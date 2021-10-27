import React from "react";

export default function Header() {
  return (
    <div id="header" class="container-fluid">
      <div class="row bg-dark text-white align-items-center">
        <div class="col-1 my-2 mx-3">
          <img
            class=""
            src="https://picsum.photos/75/75"
            alt="..."
            srcSet=""
          />
        </div>
        <div class="col-1 text-center">
          <div class="row">
            <h6 class="text-muted">CONTENT</h6>
          </div>
          <div class="row">
            <h4>SYSTEM</h4>
          </div>
        </div>
        <div class="col-1 text-center">
          <div class="row">
            <h6 class="text-muted">MANAGEMENT</h6>
          </div>
          <div class="row">
            <h4>SITE</h4>
          </div>
        </div>
        <div class="col text-end">

        </div>
        <div class="col-2"></div>
      </div>
    </div>
  );
};
