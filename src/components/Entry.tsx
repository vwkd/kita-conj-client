export default function Entry({ id, definition, value }) {
  return (
    <div class="flex-1 flex-col gap-5">
      <Definition {...definition} />
      <Table {...value} />
    </div>
  );
}

function Definition({ category, preverb, version, root, thema }) {
  return (
    <div class="flex-col gap-3">
      <h2 class="text-xl font-semibold text-slate-500">Definition</h2>
      <div class="flex-1 flex-col">
        <Label label="Category">
          <p>{category}</p>
        </Label>
        <Label label="Preverb">
          <p>{preverb}</p>
        </Label>
        <Label label="Version">
          <p>{version}</p>
        </Label>
        <Label label="Root">
          <p class="font-bold">{root}</p>
        </Label>
        <Label label="Thema">
          <p>{thema}</p>
        </Label>
      </div>
    </div>
  );
}

function Table({ SRS1, SRS2, SRS3 }) {
  return (
    <div class="flex-col gap-3">
      <h2 class="text-xl font-semibold text-slate-500">Value</h2>
      <SRS1_ {...SRS1} />
      <SRS2_ {...SRS2} />
      <SRS3_ {...SRS3} />
    </div>
  );
}

function SRS1_({ GRP1, GRP2 }) {
  return (
    <div class="flex-col gap-1">
      <h2 class="text-lg font-semibold text-slate-500">Series 1</h2>
      <GRP1_ {...GRP1} />
      <GRP2_ {...GRP2} />
    </div>
  );
}

function GRP1_({ PRS, IMPF, PRSSUBJ }) {
  return (
    <div class="flex-col gap-1">
      <h3 class="font-semibold text-slate-500">Group 1</h3>
      <Screeve {...PRS} label="Present" />
      <Screeve {...IMPF} label="Imperfect" />
      <Screeve {...PRSSUBJ} label="Present Subjunctive" />
    </div>
  );
}

function GRP2_({ FUT, COND, FUTSUBJ }) {
  return (
    <div class="flex-col gap-1">
      <h3 class="font-semibold text-slate-500">Group 2</h3>
      <Screeve {...FUT} label="Future" />
      <Screeve {...COND} label="Conditional" />
      <Screeve {...FUTSUBJ} label="Future Subjunctive" />
    </div>
  );
}

function SRS2_({ AOR, AORIMPF, OPT, OPTIMPF }) {
  return (
    <div class="flex-col gap-1">
      <h2 class="text-lg font-semibold text-slate-500">Series 2</h2>
      <Screeve {...AOR} label="Aorist" />
      <Screeve {...AORIMPF} label="Aorist Imperfective" />
      <Screeve {...OPT} label="Optative" />
      <Screeve {...OPTIMPF} label="Optative Imperfective" />
    </div>
  );
}

function SRS3_({ PERF, PERFIMPF, PLUPERF, PLUPERFIMPF, PERFSUBJ, PERFSUBJIMPF }) {
  return (
    <div class="flex-col gap-1">
      <h2 class="text-lg font-semibold text-slate-500">Series 3</h2>
      <Screeve {...PERF} label="Perfect" />
      <Screeve {...PERFIMPF} label="Perfect Imperfective" />
      <Screeve {...PLUPERF} label="Pluperfect" />
      <Screeve {...PLUPERFIMPF} label="Pluperfect Imperfective" />
      <Screeve {...PERFSUBJ} label="Perfect Subjunctive" />
      <Screeve {...PERFSUBJIMPF} label="Perfect Subjunctive Imperfective" />
    </div>
  );
}

function Screeve({ S1, S2, S3, P1, P2, P3, label }) {
  return (
    <div class="flex-col gap-1">
      <h4 class="text-sm font-semibold text-slate-500">{label}</h4>
      <div class="flex-col">
        <Form {...S1} label="S1" />
        <Form {...S2} label="S2" />
        <Form {...S3} label="S3" />
        <Form {...P1} label="P1" />
        <Form {...P2} label="P2" />
        <Form {...P3} label="P3" />
      </div>
    </div>
  );
}

function Form({ preverb, person1, version, root, thema, modus, person2, label }) {
  return (
    <Label label={label}>
      <p>
        <Component {...preverb} label="Preverb" />
        <Component {...person1} label="Person1" />
        <Component {...version} label="Version" />
        <Component {...root} label="Root" />
        <Component {...thema} label="Thema" />
        <Component {...modus} label="Modus" />
        <Component {...person2} label="Person2" />
      </p>
    </Label>
  );
}

function Component({ value, isException, note, label }) {
  if (value) {
    return (
      <span class={`${isException ? "text-red-500" : ""}`}>{value}</span>
    );
  } else {
    return null;
  }
}

function Label({ label, children }) {
  return (
    <div class="flex-1 gap-3 items-baseline">
      <p class="text-sm font-semibold text-slate-500">{label}</p>
      {children}
    </div>
  );
}
