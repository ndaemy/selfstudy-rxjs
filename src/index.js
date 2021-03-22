import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// map(x => x * x)(of(1, 2, 3)).subscribe(console.log);

of(1, 2, 3)
  .pipe(map(x => x * x))
  .subscribe(console.log);
