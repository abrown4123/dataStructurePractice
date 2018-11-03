// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//My solution
function pyramid(n) {
    let space = Math.floor(((n*2)-1)/2);
	let blocks = 1;
    for (let i=0; i<n; i++) {
        console.log( `${"".padEnd(space, " ")}${"".padEnd(blocks,"#")}${"".padEnd(space, " ")}`);
        blocks += 2;
        space--;
    }
}

module.exports = pyramid;
