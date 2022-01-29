import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);
const TIME_STAMP = 'videoplayer-current-time';
const stopTimer = localStorage.getItem(TIME_STAMP);

const onTimeUpdate = e => localStorage.setItem(TIME_STAMP, e.seconds);

// let ifStop;
// ifStop = player.setCurrentTime(stopTimer) ?? stopTimer; //?NOT WORKING

if (stopTimer) {
  player.setCurrentTime(stopTimer);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));