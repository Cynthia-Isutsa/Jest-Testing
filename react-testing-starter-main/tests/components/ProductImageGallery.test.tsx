
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {

    it('should render nothing when the imageUrls array is empty', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />);
        expect(container).toBeEmptyDOMElement();
      });

  it('should render an image of the Url', () => {
   const imageUrls : string[] = [
    'https://example.com/image1.jpg',
     'https://example.com/image2.jpg'
    ]

    render(<ProductImageGallery imageUrls={imageUrls} />)
  const  image = screen.getAllByRole('img')
  expect(image).toHaveLength(imageUrls.length)
  imageUrls.forEach((url, index) => {
    expect(image[index]).toHaveAttribute('src', url)
  })
 })
})