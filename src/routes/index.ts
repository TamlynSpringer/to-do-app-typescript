import { Router, Response, Request } from 'express';
import { getTodosFromDB, addTodo, updateTodo, deleteTodo } from '../controllers/todos';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Server working</h1>')
})

router.get('/todos', getTodosFromDB);

router.post('/add-todo', addTodo);

router.put('/edit-todo/:id', updateTodo);

router.delete('/delete-todo/:id', deleteTodo)

export default router;