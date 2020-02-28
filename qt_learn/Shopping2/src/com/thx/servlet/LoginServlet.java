package com.thx.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.thx.bean.User;
import com.thx.dao.UserDao;
import com.thx.factory.DaoFactory;

@WebServlet("/com/thx/servlet/LoginServlet.java")
public class LoginServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		//获取用户输入的登录信息
		String uname = request.getParameter("uname");
		String passwd = request.getParameter("passwd");
		User user = null;
		String message = "";  //提示信息
		String path = "jsp/login.jsp";
		try {
			UserDao dao = DaoFactory.getUserServiceInstance();
			if ((user = dao.queryByName(uname)) != null) {      //若用户已注册
				if (user.getPasswd().equals(passwd)) {         //密码正确
					//创建session
					String lastLoginTime = user.getLastLogin();
					dao.editLoginTime(user.getUid());        //记录登录时间
					System.out.println("uid="+user.getUid());
					request.getSession().setAttribute("uname", uname);
					request.getSession().setAttribute("uid", String.valueOf(user.getUid()));
					request.getSession().setAttribute("lastLoginTime", lastLoginTime);
					path = "index.jsp";
				} else {
					message = "密码错误，请重新输入";
				}
			} else {
				message = "不存在该用户，请重新输入";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		String truePath = request.getContextPath() + "/" + path;
		if ("".equals(message)) {
			response.sendRedirect(truePath);
		} else {
			PrintWriter out = response.getWriter();
			out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
			out.println("<HTML>");
			out.println("  <HEAD><TITLE>登录出错</TITLE>");
			out.println("<meta http-equiv=\"refresh\" content=\"5;url="
					+ truePath + "\">");
			out.println("</HEAD>");
			out.println("  <BODY>");
			out.print("<div align=\"center\">");
			out.print(message);
			out.print("<br/>");
			out.print("将自动跳转到登录页面");
			out.print("<br/>");
			out.print("或点击这里返回：");
			out.print("<a href=\"" + truePath+"\"" +">登录"+"</a>");
			out.print("</div>");
			out.println("  </BODY>");
			out.println("</HTML>");
			out.flush();
			out.close();
		}
	}

}
