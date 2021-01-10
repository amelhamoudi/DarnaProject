import React from "react"
import { render,act,cleanup} from "@testing-library/react"
import CreatePresentation from "../../components/admin-routes/List-rubriques/accueil/Presentation/CreatePresentation"
import { Provider } from 'react-redux'
import presentation from "@testing-library/user-event"
import store from '../../store'
//import * as actions from '../../Actions/authAction'

describe("test add presentation", () => {
    afterEach(cleanup)

  test.skip("The CreatePresentation component must work without crashing", () => {
    const { debug } = render(<Provider store={store}><CreatePresentation/></Provider>);
    debug()
  });
  test.skip("Testing AddPresentation Form : description_presentation", () => {
    const { debug, getByLabelText,getByTestId} = render(
      <Provider store={store}><CreatePresentation/></Provider>
    );
    const description_presentation = getByLabelText(/description_presentation/i);
    debug(description_presentation)
    expect(description_presentation).toBeTruthy();
    expect(description_presentation).toHaveAttribute("type", "text");
    expect(getByTestId("addbtn")).toBeTruthy()
  });
  test.skip("Testing change input and Button", async () => {
    const promise=Promise.resolve()
    //const mockRegister = jest.fn(()=>promise);
    const mockRegister = jest.fn();

    const { debug, getByLabelText,getByTestId } = render(<Provider store={store}><Crea/></Provider>)
    
    const description_presentation = getByLabelText(/description_presentation/i)
    const description="C'est une description de la rubrique présentation"
    presentation.type(username, Userusername)
    expect(description_presentation).toHaveValue(description)
    debug(description_presentation) 

    
    
    const addbtn = getByTestId("addbtn")
    presentation.click(addbtn)
    await act(() => promise)

    expect(mockRegister).toHaveBeenCalled()
    expect(mockRegister).toHaveBeenCalledTimes(1) 
  })
});
