type LanguageChangeButtonProps = {
  languageProps: string;
  onClickENProps: any;
  onClickIDProps: any;
};

export default function LanguageChangeButton(props: LanguageChangeButtonProps) {
  return (
    <div className="mt-5 flex items-center justify-center text-xs">
      <button type="button" onClick={props.onClickENProps} className={`${props.languageProps == "inggris" ? "text-blue-500" : "text-black"}`}>
        EN
      </button>
      <p>/</p>
      <button type="button" onClick={props.onClickIDProps} className={`${props.languageProps == "inggris" ? "text-black" : "text-blue-500"}`}>
        ID
      </button>
    </div>
  );
}
