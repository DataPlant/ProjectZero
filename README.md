# ProjectZero

This is a Tomogoachi remake project.
The art and inspiration comes from an old mmorpg, Ragnarok Online (One of the first ones in Korea I think). I have very much enjoyed their efficient use of sprites to create a beautiful game, and it is of my personal opinion that the art style still holds up today.

## Index
 - [Scope](#Scope)
 - [Breakdown](#Breakdown)
 - [Structure](#Structure)



 ## Scope

 The objective of this game is to keep the pet alive. This means, the HP bar must not reach 0, neither can Sleep or Sanity bar. But you will need to risk both hp and sanity in the portal to gain valuable items, such as sanity treats and food supply.

 ## Breakdown

 The code was mostly written outside of a class first, then I transformed it into a class. While I could put more things in the class, I didn't see a reason to include literally most of the code in the class, as I am not creating multiple instances of the pet (Saw joel do it, tried to do it, broke my code, almost busted a blood vessel fixing it, now I have been conditioned to commit work and push before any major changes to the code). I will however, try to do multiple instances here in the coming week.

## Structure

The class 'Creature' takes 6 values into constructor, and contains the interval countdown functions that periodically lowers the statistics of the pet, it also contains the functions that are called when button listeners are activated. Button listeners are also condensed into one function under the class. So is the name change function.

Rest of the code contains the constants for querySelector, and variables to be used in the functions when it is called by a newly created class. Also some other few functions with simple functionalities (i.e reset page, age counter, etc)