"use strict"

{
    const menu = documentElementGetById("menu"); // 左辺の名前で右辺の要素を扱う
    const close = documentElementGetById("close");
    const modal = documentElementGetById("modal");
    const mask = documentElementGetById("mask");

    menu.addEventListener("click", function() {
        modal.css("display", "block");
        mask.css("display", "block");
    });
}