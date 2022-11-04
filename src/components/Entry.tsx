export default function Entry({ id, definition, value }) {
  return (
    <div class="flex-1 flex-col gap-5">
      <Definition {...definition} />
      <TableOrException value={value} />
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

function TableOrException({ value }) {
  return (
    <div class="flex-col gap-3">
      <h2 class="text-xl font-semibold text-slate-500">Value</h2>
      { value.note
        ? <Exception {...value} />
        : <Table {...value} />
      }
    </div>
  );
}

function Table({ SRS1, SRS2, SRS3 }) {
  return (
    <div class="flex-col gap-3">
      <SRS1OrException value={SRS1} />
      <SRS2OrException value={SRS2} />
      <SRS3OrException value={SRS3} />
    </div>
  );
}

function SRS1OrException({ value }) {
  return (
    <div class="flex-col gap-1">
      <h2 class="text-lg font-semibold text-slate-500">Series 1</h2>
      { value.note
        ? <Exception {...value} />
        : <SRS1_ {...value} />
      }
    </div>
  );
}

function SRS1_({ GRP1, GRP2 }) {
  return (
    <div class="flex-col gap-3">
      <GRP1OrException value={GRP1} />
      <GRP2OrException value={GRP2} />
    </div>
  );
}

function GRP1OrException({ value }) {
  return (
    <div class="flex-col gap-1">
      <h3 class="font-semibold text-slate-500">Group 1</h3>
      { value.note
        ? <Exception {...value} />
        : <GRP1_ {...value} />
      }
    </div>
  );
}

function GRP1_({ PRS, IMPF, PRSSUBJ }) {
  return (
    <div class="flex-col gap-3">
      <ScreeveOrException Screeve={Screeve} value={PRS} label="Present" />
      <ScreeveOrException value={IMPF} label="Imperfect" />
      <ScreeveOrException value={PRSSUBJ} label="Present Subjunctive" />
    </div>
  );
}

function GRP2OrException({ value }) {
  return (
    <div class="flex-col gap-1">
      <h3 class="font-semibold text-slate-500">Group 2</h3>
      { value.note
        ? <Exception {...value} />
        : <GRP2_ {...value} />
      }
    </div>
  );
}

function GRP2_({ FUT, COND, FUTSUBJ }) {
  return (
    <div class="flex-col gap-3">
      <ScreeveOrException value={FUT} label="Future" />
      <ScreeveOrException value={COND} label="Conditional" />
      <ScreeveOrException value={FUTSUBJ} label="Future Subjunctive" />
    </div>
  );
}

function SRS2OrException({ value }) {
  return (
    <div class="flex-col gap-1">
      <h2 class="text-lg font-semibold text-slate-500">Series 2</h2>
      { value.note
        ? <Exception {...value} />
        : <SRS2_ {...value} />
      }
    </div>
  );
}

function SRS2_({ AOR, AORIMPF, OPT, OPTIMPF }) {
  return (
    <div class="flex-col gap-3">
      <ScreeveOrException value={AOR} label="Aorist" />
      <ScreeveOrException value={AORIMPF} label="Aorist Imperfective" />
      <ScreeveOrException value={OPT} label="Optative" />
      <ScreeveOrException value={OPTIMPF} label="Optative Imperfective" />
    </div>
  );
}

function SRS3OrException({ value }) {
  return (
    <div class="flex-col gap-1">
      <h2 class="text-lg font-semibold text-slate-500">Series 3</h2>
      { value.note
        ? <Exception {...value} />
        : <SRS3_ {...value} />
      }
    </div>
  );
}

function SRS3_({ PERF, PERFIMPF, PLUPERF, PLUPERFIMPF, PERFSUBJ, PERFSUBJIMPF }) {
  return (
    <div class="flex-col gap-3">
      <ScreeveOrException value={PERF} label="Perfect" />
      <ScreeveOrException value={PERFIMPF} label="Perfect Imperfective" />
      <ScreeveOrException value={PLUPERF} label="Pluperfect" />
      <ScreeveOrException value={PLUPERFIMPF} label="Pluperfect Imperfective" />
      <ScreeveOrException value={PERFSUBJ} label="Perfect Subjunctive" />
      <ScreeveOrException value={PERFSUBJIMPF} label="Perfect Subjunctive Imperfective" />
    </div>
  );
}

function ScreeveOrException({ value, label }) {
  return (
    <div class="flex-col gap-1">
      <h4 class="text-sm font-semibold text-slate-500">{label}</h4>
      { value.note
        ? <Exception {...value} />
        : <Screeve {...value} />
      }
    </div>
  );
}

function Screeve({ S1, S2, S3, P1, P2, P3 }) {
  return (
    <table class="grid grid-rows-6 grid-cols-8 gap-x-3 justify-start max-w-max">
      <tbody class="row-span-full col-span-full grid" style="grid-template-rows: subgrid; grid-template-columns: subgrid;">
        <FormOrException value={S1} label="S1" />
        <FormOrException value={S2} label="S2" />
        <FormOrException value={S3} label="S3" />
        <FormOrException value={P1} label="P1" />
        <FormOrException value={P2} label="P2" />
        <FormOrException value={P3} label="P3" />
      </tbody>
    </table>
  );
}

function FormOrException({ value, label }) {
  return (
    <tr class="col-span-full grid items-baseline" style="grid-template-columns: subgrid;">
      <th class="text-sm font-semibold text-slate-500">{label}</th>
      { value.note
        ? <FormException {...value} />
        : <Form {...value} />
      }
    </tr>
  );
}

function Form({ preverb, person1, version, root, thema, modus, person2 }) {
  return (
    <td class="col-start-2 col-end-9 grid gap-x-1 items-baseline" style="grid-template-columns: subgrid;">
      <ComponentOrException value={preverb} label="Preverb" />
      <ComponentOrException value={person1} label="Person1" />
      <ComponentOrException value={version} label="Version" />
      <ComponentOrException value={root} label="Root" />
      <ComponentOrException value={thema} label="Thema" />
      <ComponentOrException value={modus} label="Modus" />
      <ComponentOrException value={person2} label="Person2" />
    </td>
  );
}

function ComponentOrException({ value, label }) {
  return (
    <>
    { value.note
      ? <ComponentException {...value} />
      : <Component {...value} />
    }
    </>
  );
}

function Component({ value, label }) {
  return (
    <span>{value ?? "-"}</span>
  );
}

function Exception({ value, note }) {
  return (
    <span class="text-red-700">{value ?? "-"}</span>
  );
}

function FormException({ value, note }) {
  return (
    <td class="col-start-2 col-end-9">
      <span class="text-red-700">{value ?? "-"}</span>
    </td>
  );
}

function ComponentException({ value, note }) {
  return (
    <span class="text-red-700">{value ?? "-"}</span>
  );
}

function Label({ label, children }) {
  return (
    <div class="flex-1 gap-3 items-baseline">
      <p class="text-sm font-semibold text-slate-500">{label}</p>
      {children}
    </div>
  );
}
