// type assertion
const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "Hello";

// ! => undefined나 null이 아니라고 보장
const bodyElement1 = document.querySelector('body');
bodyElement1!.innerText = "Hello";

// type guard
const bodyElement2 = document.querySelector('body');
if(bodyElement2) {
    bodyElement2.innerText = "Hello";
}
