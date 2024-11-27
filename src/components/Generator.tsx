import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Generator = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [useWords, setUseWords] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useUpperLower, setUpperLower] = useState<boolean>(true);
  const [useInput, setInput] = useState<boolean>(false);
  const [inputBuffer, setInputBuffer] = useState<string>("");
  

  const handleInput = () => {
    setInput(!useInput)
    if(!useInput) {
    setUseWords(false)
    setUseNumbers(false)
    setUseSymbols(false)
    setUpperLower(false)
  } else{
    setUseWords(true)
    setUseNumbers(true)
    setUseSymbols(true)
    setUpperLower(true)
    setInputBuffer("")
  }}

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (useWords) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()";
    if (useUpperLower) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(useInput) charset += inputBuffer

    for (let i = 0; i < passwordLength; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
}

const copyText = (text: string) => {
    toast("🦄 Скопировано в буфер обмена!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
    <div className="flex flex-col p-4 text-black gap-8 items-center">
      <div className="flex w-full justify-center items-center gap-8">
        <label className="text-green-500 text-base">Длина пароля:</label>
        <input
          type="number"
          min="8"
          max="32"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          className="p-[5px]  border border-solid border-green-500"
        />
      </div>

      <div className="flex w-full justify-center items-center gap-1">
        <label className="text-green-500 text p-1">
          <input
            placeholder="Введите имя пользователя"
            className="m-3"
            type="checkbox"
            checked={useWords}
            onChange={() => {
            setUseWords(!useWords)
            useWords && setUpperLower(false)}
            }
          />
          использ. букв
        </label>

        <label className="text-green-500 text p-1">
          <input
            placeholder="Введите имя пользователя"
            className="m-3"
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          использ. цифр
        </label>
        <label className="text-green-500 text p-1">
          <input
            placeholder="Введите имя пользователя"
            className="m-3"
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />
          использ. спецсимволов
        </label>
        <label className="text-green-500 text p-1">
          <input
            placeholder="Введите имя пользователя"
            className="m-3"
            type="checkbox"
            checked={useUpperLower}
            onChange={() => {
              setUpperLower(!useUpperLower);
              !useUpperLower && setUseWords(true)
            }}
          />
          использ. вер. / ниж. рег.
        </label>
        <label className="text-green-500 text p-1">
          <input
            placeholder="Введите имя пользователя"
            className="m-3"
            type="checkbox"
            checked={useInput}
            onChange={handleInput}
          />
          свой символов
        </label>
      </div>
      {
        useInput && (
             <div className="flex w-full justify-center items-center gap-1">
            <label className="text-green-500 text p-1">
            символов
            </label>
            <input
              placeholder="напишите свои символы"
              className="m-1 pl-2 rounded-full border border-green-500"
              type="text"
              value={inputBuffer}
              onChange={(e)=>setInputBuffer(e.target.value)}
            />
          </div>
        )
      }
      <button
        className="flex justify-center gap-2 items-center
           bg-green-400 rounded-full px-8 py-2 w-fit
            hover:bg-green-300
            border border-green-900"
            onClick={generatePassword}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
          />
        </svg>
        Сгенерировать пароль
      </button>
      <div className="flex w-full justify-center items-center gap-1">
        <label className="text-green-500 text p-1">
          Сгенерированный пароль
        </label>
        <input
          placeholder="сгенерированный пароль"
          className="m-1 pl-2 rounded-full border border-green-500"
          type="text"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <div
                            className="cursor-pointer size-6 ml-3"
                            onClick={() => copyText(password)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                              />
                            </svg>
                          </div>
      </div>
    </div> 
    </>
  );
};
