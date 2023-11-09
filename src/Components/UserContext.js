import React, { createContext, useState } from "react";
import axios from "axios";

export const DictionaryContext = createContext();

const UserContext = ({ children }) => {
  const [words, setWords] = useState();
  const [word, setWord] = useState("");

  const getDefinition = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.data;
    setWords(data[0]);
    console.log(data[0]);
  };

  return (
    <DictionaryContext.Provider
      value={{ word, setWord, words, setWords, getDefinition }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export default UserContext;

// import React, { createContext, useContext, useState } from "react";
// import axios from "axios";

// const DictionaryContext = createContext();

// export const useDictionary = () => {
//   return useContext(DictionaryContext);
// };

// export const DictionaryProvider = ({ children }) => {
//   const [definitions, setDefinitions] = useState([]);
//   const [audioUrl, setAudioUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const searchWord = async (word) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//       );
//       setDefinitions(response.data.definitions);
//       setAudioUrl(response.data.audioUrl);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//     return (
//       <DictionaryContext.Provider
//         value={{ definitions, audioUrl, loading, error, searchWord }}
//       >
//         {children}
//       </DictionaryContext.Provider>
//     );
//   };
// };
