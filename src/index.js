import { from, interval, of, zip } from 'rxjs';
import { concatMap, delay, map, mergeMap, take } from 'rxjs/operators';

const list = [1, 2, 3, 4, 5];

// from(list)
//   .pipe(
//     mergeMap(i => of(i).pipe(delay(i * 1000))),
//     take(10)
//   )
//   .subscribe(console.log);

// from(list)
//   .pipe(mergeMap(i => of(i).pipe(delay(i * 1000))))
//   .subscribe(console.log);

// from(list)
//   .pipe(concatMap(val => of(val).pipe(delay(1000))))
//   .subscribe(console.log);

interval(1000)
  .pipe(
    take(list.length),
    map(i => list[i])
  )
  .subscribe(console.log);
