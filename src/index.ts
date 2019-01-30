interface Counts { [k: string]: number; }

const report = async (
  counts: Counts,
  options?: { log?: (s: string) => void; }
): Promise<void> => {
  // tslint:disable:no-console
  const log =
    typeof options !== 'undefined' && typeof options.log !== 'undefined'
      ? options.log
      : console.log.bind(console);
  // tslint:enable
  Object.keys(counts).forEach((key) => {
    log(key + ':' + counts[key]);
  });
};

export default report;
