import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TaskManager from '../../presentation/tasks/TaskManager';



test('button has correct', () => {
  render(<TaskManager />);
  const title = screen.getByText('Mantenimiento de tareas');
  const titleH2 = screen.getByRole('heading', { level: 2, 
    name: 'Mantenimiento de tareas',
  });
  expect(title).toBeInTheDocument();
  expect(titleH2).toHaveClass('text-center');
  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: 'Guardar',
  });

  // expect the background color to be red
  expect(colorButton).toHaveClass('btn btn-primary');

  // click button
  //fireEvent.click(colorButton);

  // expect the background color to be blue
  //expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to MediumVioletRed'
  //expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});


/* jest.mock('../../application/tasks/usecases/get-all-task.usecase', () => {
  return {
    GetAllTaskCase: jest.fn().mockImplementation(() => ({
      execute: () => ({
        dates: [
          { id: 1, name: 'Tarea Mock', state: 1 }
        ]
      })
    }))
  };
});


jest.mock('../../application/tasks/usecases/create-task.usecase', () => {
  return {
    CreateTaskUseCase: jest.fn().mockImplementation(() => ({
      execute: jest.fn()
    }))
  };
}); */

/* describe('TaskManager component', () => {
  it('debe renderizar el título', () => {
    render(<TaskManager />);
    expect(screen.getByText('Mantenimiento de tareas')).toBeInTheDocument();
  });

  it('debe mostrar tarea mock inicial', async () => {
    render(<TaskManager />);
    expect(await screen.findByText('Tarea Mock')).toBeInTheDocument();
  });

  it('debe agregar una nueva tarea', async () => {
    render(<TaskManager />);

    const input = screen.getByPlaceholderText('task');
    fireEvent.change(input, { target: { value: 'Nueva tarea' } });

    const saveButton = screen.getByText('Guardar');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('Nueva tarea')).toBeInTheDocument();
    });
  });
}); */
