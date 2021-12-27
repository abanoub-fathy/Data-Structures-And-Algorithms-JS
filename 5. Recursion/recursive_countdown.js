const countDown = (num) => {
    if(num < 1) {
        console.log("All done");
        return;
    }

    console.log(num);
    countDown(--num);
}

countDown(4) // 4 3 2 1 All done

