// array that will hold the permutations
// it is emptied each time the permAlone function is called
var perms = [];

function permAlone(str) {
     var strArr = str.split("");
     //console.log(strArr);

     // empty the answer array each time this function is called
     perms = [];
     permutator(strArr.length, strArr);
     console.log(str + " - num perms: " + perms.length);
     // console.log(perms.join(", "));
     perms = removeDuplicates();
     console.log(perms.length);
     return perms.length;
}

/**
 * removeDuplicates
 *   does a filter to remove array elments with consecutive duplicate characters "aa", "bbb", etc.
 * @returns - array with duplicate elements removed
 */
function removeDuplicates() {
     var removeCounter = 0;
     var regEx = /(.)\1+/g;

     var finalPerms = perms.filter(function (element, index, array) {
          if (element.match(regEx)) {
               console.log("removed: " + element);
               removeCounter++;
               return false;
          }
          else {
               return true;
          }
     });
     console.log("Removed: " + removeCounter);
     return finalPerms;
}

/**
 * permutator
 *
 * @param {any} arr - an array of characters to be permutated
 * @return perms - an array of permutated strings
 */
var permCounter = 1;
function permutator(n, array) {

     function swap(a, b) {
          var temp = array[a];
          array[a] = array[b];
          array[b] = temp;
     }

     if (n === 1) {
          perms.push(array.join(""));
          console.log(permCounter + ": " + array.join(""));
          permCounter++;
          //return array;
     }
     else {
          for (var i = 0; i < n - 1; i++) {
               permutator(n - 1, array);
               if (n % 2 === 0) {
                    swap(i, n - 1);
               }
               else {
                    swap(0, n - 1);
               }
          }
          // console.log(array.toString());
          permutator(n - 1, array);
     }
}



/*
permAlone("aab");
permAlone("aab");
permAlone("aaa");
permAlone("aabb");
permAlone("abcdefa");
permAlone("abfdefa");
permAlone("zzzzzzzz");
permAlone("a");
permAlone("aaab");*/
permAlone("abcde");
