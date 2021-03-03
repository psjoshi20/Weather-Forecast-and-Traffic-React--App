() => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomTimeInput = ({ date, value, onChange }) => (
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ border: "solid 1px pink" }}
      />
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeInput
        customTimeInput={<ExampleCustomTimeInput />}
      />
    );
  };

  ------------------------------------------------
  () => {
    const [startDate, setStartDate] = useState(new Date());
  
    let handleColor = time => {
      return time.getHours() > 12 ? "text-success" : "text-error";
    };
  
    return (
      <DatePicker
        showTimeSelect
        selected={startDate}
        onChange={date => setStartDate(date)}
        timeClassName={handleColor}
      />
    );
  };