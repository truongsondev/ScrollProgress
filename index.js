// handle JavaScript

const RenderValue = document.querySelector(".render-progess");

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    const ScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const ScrollHeight = document.documentElement.scrollHeight;
    const ScrollClientHight = document.documentElement.clientHeight;

    const Percents = Math.floor(
      (ScrollTop / (ScrollHeight - ScrollClientHight)) * 100
    );

    console.log("check file :", Percents);

    RenderValue.style.width = Percents + "%";
  });
});
