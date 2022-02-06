const d = document;
const $titleFaq = d.querySelectorAll(".title-faq");
const $faqArrowImg = d.querySelectorAll(".faq-arrow-img");
const $contentFaq = d.querySelectorAll(".content-faq");
const $main = d.querySelector(".main");

const changeToAfterBox = () => {};

$titleFaq.forEach((el) => {
  el.addEventListener("click", () => {
    $titleFaq.forEach((subEl) => {
      subEl.classList.remove("title-faq-isActive");
      subEl.nextElementSibling.classList.remove("faq-arrow-img-isActive");
      subEl.parentElement.nextElementSibling.classList.remove(
        "content-isActive"
      );
    });
    el.nextElementSibling.classList.add("faq-arrow-img-isActive");
    el.classList.add("title-faq-isActive");
    el.parentElement.nextElementSibling.classList.add("content-isActive");
    $main.setAttribute("data-class", "before");
  });
});
