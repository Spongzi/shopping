import {RouterProvider} from "react-router-dom";
import router from "./router";

function App() {
    return (
        <RouterProvider router={router}>
            <div>
                我是app组件
            </div>
        </RouterProvider>
    );
}

export default App;
