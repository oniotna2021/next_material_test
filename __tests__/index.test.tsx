import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    
    const {getByTestId} =  render(<Home />)
    const h1 =  getByTestId("container1");

    expect(h1.textContent).toBe('NextJS TRAINING');
    
  })
})
