package com.thx.factory;

import com.thx.dao.AlreadyBuyDao;
import com.thx.dao.GoodsDao;
import com.thx.dao.ShoppingCartDao;
import com.thx.dao.UserDao;
import com.thx.service.AlreadyBuyService;
import com.thx.service.GoodsService;
import com.thx.service.ShoppingCartService;
import com.thx.service.UserService;

public class DaoFactory {

	public static UserDao getUserServiceInstance() throws Exception {
		return new UserService();
	}

	public static GoodsDao getGoodsServiceInstance() throws Exception {
		return new GoodsService();
	}

	public static ShoppingCartDao getShoppingCartServiceInstance()
			throws Exception {
		return new ShoppingCartService();
	}

	public static AlreadyBuyDao getAlreadyBuyServiceInstance() throws Exception {
		return new AlreadyBuyService();
	}
}
