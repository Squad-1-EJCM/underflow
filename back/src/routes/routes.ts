import Router from "express";
import UserController from "../controllers/UserController";
import BookController from "../controllers/BookController";
import CategoryController from "../controllers/CategoryController";
import CartController from "../controllers/CartController";
import PurchaseController from "../controllers/PurchaseController";
import FavoriteController from "../controllers/FavoriteController";
import CommentController from "../controllers/CommentController";
import AuthController from "../controllers/AuthController";

const router = Router();

// Auth Routes
router.post("/login",AuthController.login)
router.post("/logout",AuthController.logout)
router.get("/profile",AuthController.getDetails)

// User Routes
router.get("/user/:id", UserController.getDetail);
router.get("/users", UserController.showAll);
router.post("/user", UserController.create);
router.put("/user/:id", UserController.update);
router.delete("user/:id", UserController.delete);
router.delete("users", UserController.deleteAll);

// Book Routes
router.get("/book/:id", BookController.detail);
router.get("/books", BookController.show);
router.post("/book", BookController.create);
router.put("/book/:id", BookController.update);
router.delete("/book/:id", BookController.deleteBook);


// Favorite Routes
router.get("/favorites/:userID", FavoriteController.showFavoritedBooksByUser);
router.get("/favorites", FavoriteController.showAll);
router.get(
  "/favorites/books/:bookId",
  FavoriteController.showFavoritedBooksByUser
);
router.delete("/favorites/:bookId", FavoriteController.deleteFavorite);
router.delete("/favorites", FavoriteController.deleteAll);

//Comment Routes
router.get("/comments", CommentController.showAll);
router.get("/comment/book/:bookId", CommentController.showCommentsOnBook);
router.post("comment/book/:bookId", CommentController.create);
router.put("/comment/book/:bookId", CommentController.edit);
router.delete("/comment/book/:bookId", CommentController.delete);
router.delete("/comments", CommentController.deleteAll);

//Category Routes
router.post("/category/:bookId", CategoryController.createMany);
router.get("/category/:category", CategoryController.findBooksFromCategory);
router.put("/category/:bookId", CategoryController.updateMany);
router.delete("/category/:bookId", CategoryController.deleteCategoryFromBook);

// Cart Routes
router.get("/cart/:userId", CartController.getBooksOnCart);
router.get("/carts", CartController.showAllCarts);
router.post("/cart", CartController.create);
router.post("/cart/book/:bookId", CartController.insertBookOnCart);
router.put("/cart/book/:cartId", CartController.updateBookOnCart);
router.delete("/cart/book/:cartId", CartController.deleteBookFromCart);
router.delete("/cart/:cartId", CartController.deleteCart);

// Purchase Routes
router.get("/purchases", PurchaseController.showPurchasesFromUser);
router.get("/purchases/all", PurchaseController.showAll);
router.post("/purchase/:cartId", PurchaseController.create);
router.delete("/purchase/:cartId", PurchaseController.delete);

export default router;
