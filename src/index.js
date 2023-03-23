import { fromEvent, interval } from 'rxjs';
import { map, exhaustMap, take } from 'rxjs/operators';

const button = document.querySelector('#btn');
const observable = fromEvent(
    button, 'click'
).pipe(
    exhaustMap(() => {
        return interval(1000).pipe(
            take(5),
            tap({
                complete() {
                    console.log('inner observable completed')
                }
            })
        )
    })
)

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete');
    }
})

console.log('hello');
