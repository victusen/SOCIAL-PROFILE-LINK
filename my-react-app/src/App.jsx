import './App.css';
import HeaderComp from './HeaderComp.jsx';
import BottomLinksComp from './BottomLinksComp.jsx';  

function App() {

  return (
    <div className="max-[440px]:bg-inherit flex flex-col gap-10 items-center w-full max-w-[380px] bg-[#141414] rounded-lg box-border p-7 pt-8" >
      {/* Header Component */}
      <div className="flex flex-col items-center gap-5" >
        <HeaderComp />
      </div>

      {/* Other extra Components */}
      <BottomLinksComp />
    </div>
  )
}

export default App;