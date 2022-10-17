function insert(intervals: number[][], newInterval: number[]): number[][] {
    let res = [];
    let i = 0;

    const start = 0;
    const end = 1;

    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }

    res.push(newInterval);

    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
}