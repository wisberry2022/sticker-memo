import { toggleClass } from "/js/util/DomControl.js";
import PostLimit from "/js/PostLimit.js";

window.addEventListener('DOMContentLoaded', e => {
    const SETTING = document.querySelector('.xi-cog');

    const PL = new PostLimit();
    const SETMODAL = document.querySelector('.modal-frame');
    const CLOSE = document.querySelector('.xi-close-min');
    const SAVE = document.querySelector('.m-foot .btn-box button:first-child');

    const BODY = document.querySelector('body');
    let modifyLimit;

    let viewLimit;

    const handleSubClick = e => {
        PL.sub();
        viewLimit.innerText = PL.getLimit();
    }

    const handleAddClick = e => {
        PL.add();
        viewLimit.innerText = PL.getLimit();
    }

    SETTING.addEventListener('click', e => {

        toggleClass(SETMODAL, 'modal-active');
        toggleClass(BODY, 'modal-on-body');

        modifyLimit = document.querySelectorAll('.set-limit i');
        viewLimit = document.querySelector('#limitNumber');
        viewLimit.innerText = PL.getLimit();

        modifyLimit[0].removeEventListener('click', handleSubClick);

        modifyLimit[1].removeEventListener('click', handleAddClick);

        modifyLimit[0].addEventListener('click', handleSubClick)

        modifyLimit[1].addEventListener('click', handleAddClick)

    })

    CLOSE.addEventListener('click', e => {
        toggleClass(SETMODAL, 'modal-active');
        toggleClass(BODY, 'modal-on-body');

        let maxPost = Number.parseInt(document.querySelector('#postNumber').innerText);
        if (maxPost > PL.getLimit()) {
            const currentPosts = Array
                .from({length:document.querySelectorAll('.post').length})
                .map((v,i) => {return document.querySelectorAll('.post')[i] });

            document.querySelector('#postNumber').innerText = PL.getLimit();
            for(let i=0; i<maxPost-PL.getLimit(); i++) {
                currentPosts.shift().remove();
            }
        }
    });

    SAVE.addEventListener('click', e => {
        CLOSE.click();
    });


});