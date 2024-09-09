import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [uppercaseIncloude, setUppercaseIncloude] = useState(false);
  const [numberIncloude, setNumberIncloude] = useState(false);
  const [charIncloud, setCharIncloud] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // userRef
  const passRef = useRef(null);
  // Generate New Password
  const passwordGenerator = useCallback(() => {
    let newPassword = "";
    let string = "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseIncloude) string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberIncloude) string += "0123456789";
    if (charIncloud) string += "~`!@#$%^&*()_+}{[]|:;.><,";

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * string.length);
      newPassword += string.charAt(randomNumber);
    }

    setPassword(newPassword);
  }, [length, numberIncloude, charIncloud, uppercaseIncloude]);

  // Copy To Clipboard
  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
        Password Generator
      </h1>

      {/* Password Display with Copy Button */}
      <div className="relative flex items-center mb-4 border border-purple-300 rounded p-1">
        <input
          id="passwordInput"
          type="text"
          readOnly
          placeholder="Your Password"
          className="flex-grow bg-transparent text-gray-700 text-lg px-2 outline-none"
          value={password}
          ref={passRef}
        />
        <button
          className="bg-purple-700 text-white p-2 hover:bg-purple-600 transition-colors duration-300"
          onClick={copyToClipBoard}
        >
          <i className="fas fa-copy"></i>
        </button>
        {tooltipVisible && (
          <div className="absolute top-[-40px] right-0 bg-gray-800 text-white text-xs rounded px-2 py-1">
            Copied!
          </div>
        )}
      </div>

      {/* Options */}
      <div className="mb-4 space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={uppercaseIncloude}
            onChange={() => setUppercaseIncloude((prev) => !prev)}
            className="form-checkbox text-purple-600"
          />
          <span className="ml-2 text-gray-700">Include Uppercase Letters</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={numberIncloude}
            onChange={() => setNumberIncloude((prev) => !prev)}
            className="form-checkbox text-purple-600"
          />
          <span className="ml-2 text-gray-700">Include Numbers</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={charIncloud}
            onChange={() => setCharIncloud((prev) => !prev)}
            className="form-checkbox text-purple-600"
          />
          <span className="ml-2 text-gray-700">Include Symbols</span>
        </label>
        <div className="flex items-center justify-between mt-4">
          <b className="text-gray-700 mt-3">Password Length:</b>
          <span className="text-gray-700 font-bold">{length}</span>
        </div>

        {/* Password Length Slider */}
        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full mt-2"
        />
      </div>

      {/* Password Strength Indicators */}
      <div className="mt-6">
        <span className="block text-center text-gray-700 mb-2 font-semibold">
          Password Strength
        </span>
        <div className="flex items-center justify-between w-full space-x-2">
          {/* Weak */}
          <div className="flex-1 relative">
            <div
              className="h-2 bg-red-500 rounded-full absolute inset-0"
              style={{ width: "100%" }}
            ></div>
            <div className="h-2 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600 mt-1 text-center block">
              Weak
            </span>
          </div>
          {/* Medium */}
          <div className="flex-1 relative">
            <div
              className="h-2 bg-yellow-500 rounded-full absolute inset-0"
              style={{
                width:
                  (uppercaseIncloude && numberIncloude) ||
                  (uppercaseIncloude && charIncloud) ||
                  (numberIncloude && charIncloud)
                    ? "100%"
                    : "0",
              }}
            ></div>
            <div className="h-2 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600 mt-1 text-center block">
              Medium
            </span>
          </div>
          {/* Strong */}
          <div className="flex-1 relative">
            <div
              className="h-2 bg-green-500 rounded-full absolute inset-0"
              style={{
                width:
                  uppercaseIncloude &&
                  numberIncloude &&
                  charIncloud &&
                  length > 9
                    ? "100%"
                    : "0",
              }}
            ></div>
            <div className="h-2 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600 mt-1 text-center block">
              Strong
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
