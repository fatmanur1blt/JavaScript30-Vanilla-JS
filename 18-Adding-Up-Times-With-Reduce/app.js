// const videoNodes = document.querySelectorAll('[data-time]');
// console.log(typeof(videoNodes));
// The data-time type is object. It will be processed with Array, so we used `Array from`.

const videoNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = videoNodes
    .map(nodeEl => nodeEl.dataset.time)
    .map(timeEl => {
        const [mins, secs] = timeEl.split(':')
        .map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds)=> total + vidSeconds);

    let secondsEls = seconds;
    const hours = Math.floor(secondsEls / 3600);
    secondsEls = secondsEls % 3600;

    const mins = Math.floor(secondsEls / 60);
    secondsEls = secondsEls % 60;

    console.log(hours, mins, secondsEls);

    document.querySelector('.result').innerHTML=
    `
      Total Time : ${hours},${mins},${secondsEls}
    `;