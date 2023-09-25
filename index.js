const card = document.querySelector(".img-card");
const heroImgLeftThi = document.querySelector(".heroImgLeftThi");
const heroImgLeftSce = document.querySelector(".heroImgLeftSce");
const heroImgLeftFir = document.querySelector(".heroImgLeftFir");
const heroImgRightFir = document.querySelector(".heroImgRightFir");
const heroImgRightSce = document.querySelector(".heroImgRightSce");
const heroImgRightThi = document.querySelector(".heroImgRightThi");
const containerHeroImg = document.querySelector(".containerHeroImg");
const osContainer = document.querySelector(".osContainer");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  console.log("client X", clientX);
  console.log("clinet Y", clientY);

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;

  heroImgLeftThi.style.transform = `perspective(${1000}px) rotateX(${
    rotateY * 2
  }deg) rotateY(${rotateX * 2}deg) scale3d(1, 1, 1)`;

  heroImgLeftSce.style.transform = `perspective(${500}px) rotateX(${
    rotateY * 2
  }deg) rotateY(${rotateX * 2}deg) scale3d(1, 1, 1)`;
  heroImgLeftFir.style.transform = `perspective(${500}px) rotateX(${
    rotateY * 2
  }deg) rotateY(${rotateX * 2}deg)scale3d(1, 1, 1)`;

  heroImgRightFir.style.transform = `perspective(${500}px) rotateX(${
    rotateY * 2
  }deg) rotateY(${rotateX * 2}deg) scale3d(1, 1, 1)`;
  heroImgRightSce.style.transform = `perspective(${500}px) rotateX(${
    rotateY * 2
  }deg) rotateY(${rotateX * 2}deg) scale3d(1, 1, 1)`;
  heroImgRightThi.style.transform = `perspective(${500}px) rotateX(${
    rotateY * 2
  }deg) rotateY(${rotateX * 2}deg) scale3d(1, 1, 1)`;

  if (clientX < 600) {
    containerHeroImg.style.backgroundColor = "#c89f67";
    osContainer.style.backgroundColor = "#c89f67";
  } else {
    containerHeroImg.style.backgroundColor = "#b5969e";
    osContainer.style.backgroundColor = "#b5969e";
  }
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  heroImgLeftFir.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  heroImgLeftSce.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  heroImgLeftThi.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  heroImgRightFir.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  heroImgRightSce.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  heroImgRightThi.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  containerHeroImg.style.backgroundColor = "#b5969e";
  osContainer.style.backgroundColor = "#b5969e";
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}
